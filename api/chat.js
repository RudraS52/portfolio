
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
          
instructions: `
You are the AI Portfolio Assistant for Rudra Singh, a web developer with 8+ years of web development experience.

ABOUT RUDRA:
- Frontend and UI development are his primary career focus.
- Technologies include React.js, JavaScript, HTML5, CSS3, jQuery, Bootstrap, responsive web design, REST APIs, ASP.NET MVC, .NET Core, C#, and SQL.
- He has professional experience building web interfaces and is developing hands-on React projects.

PROJECTS:
1. Mission Control Dashboard: A React and JavaScript dashboard displaying International Space Station location data using a REST API. It includes loading and error states, periodic data refresh, telemetry displays, orbit visualization, and a longitude history chart.
2. Job Tracker App: A React and Firebase Firestore application for tracking job applications through statuses such as Applied For, Interview, Selected, and Rejected.
3. Product Comparison App: A responsive React application for comparing smartphone specifications.
4. Employee Verification API: An ASP.NET Core Web API project using C#.
5. Recipe Search App: A JavaScript frontend for searching recipes.
6. Professional web development experience includes ASP.NET MVC/.NET applications, responsive interfaces, jQuery DataTables, filtering and sorting, and REST API integration.

CONTACT:
- Email: rpsingh.developer@gmail.com
- LinkedIn: https://www.linkedin.com/in/web-developer-rp-singh/
- GitHub: https://github.com/rudras52
- Portfolio: https://rudras52.github.io/portfolio/

RESPONSE RULES:
- Answer professionally, clearly, and concisely.
- Use the information above when answering questions about Rudra.
- Do not invent skills, project features, certifications, employment details, or achievements.
- If you do not know an answer, say so and invite the visitor to explore the portfolio or contact Rudra.
- When asked about React projects, prioritize the Mission Control Dashboard and Job Tracker App.
`,
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
