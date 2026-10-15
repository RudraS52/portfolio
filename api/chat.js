
export default async function handler(req, res) {
  // Allow only POST requests from the chatbot frontend.
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Read the secret API key from Vercel's environment variables.
    // Never expose this key in frontend React code.
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "OpenAI API key is not configured.",
      });
    }

    // Extract and validate the visitor's message.
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please provide a message.",
      });
    }

    // Limit message length to prevent unnecessarily large requests.
    if (message.length > 2000) {
      return res.status(400).json({
        error: "Message is too long. Maximum 2000 characters.",
      });
    }

    // Send the visitor's message to OpenAI from the server.
    const response = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",

          // Define the chatbot's role and response guidelines.
          instructions:
            "You are the AI assistant on Rudra Singh's developer portfolio. Answer professionally and concisely. Help visitors understand his web development skills, experience, and projects. Use only information provided in the conversation or portfolio context. If you do not know a detail, say so rather than inventing it.",

          // Pass the visitor's message as the model input.
          input: message.trim(),

          // Limit the response length to control token usage.
          max_output_tokens: 400,
        }),
      }
    );

    // Parse OpenAI's JSON response.
    const data = await response.json();

    // Handle API errors without exposing secrets to the visitor.
    if (!response.ok) {
      console.error("OpenAI API error:", data.error?.message);

      return res.status(502).json({
        error: "The AI service could not process your request.",
      });
    }

    // Extract generated text from the Responses API output.
    const reply = (data.output || [])
      .filter((item) => item.type === "message")
      .flatMap((item) => item.content || [])
      .filter((item) => item.type === "output_text")
      .map((item) => item.text)
      .join("\n");

    // Return the generated answer to the React frontend.
    return res.status(200).json({
      reply: reply || "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    // Log server-side errors while keeping details private from visitors.
    console.error("Chat backend error:", error.message);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
