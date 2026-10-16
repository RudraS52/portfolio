
export default async function handler(req, res) {
  // Accept only POST requests from the chatbot.
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Read the Groq API key securely from Vercel.
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return res.status(500).json({
        error: "Groq API key is not configured.",
      });
    }

    // Validate the visitor's message.
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please provide a message.",
      });
    }

    if (message.length > 2000) {
      return res.status(400).json({
        error: "Message is too long. Maximum 2000 characters.",
      });
    }

    // Give the assistant accurate information about Rudra.
    const instructions = `
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
6. Professional experience includes ASP.NET MVC/.NET applications, responsive interfaces, jQuery DataTables, filtering and sorting, and REST API integration.

CONTACT:
- Email: rpsingh.developer@gmail.com
- LinkedIn: https://www.linkedin.com/in/web-developer-rp-singh/
- GitHub: https://github.com/rudras52
- Portfolio: https://rudras52.github.io/portfolio/

RESPONSE RULES:
- Answer professionally and concisely.
- Use only the information provided here.
- Do not invent skills, project features, certifications, employment details, or achievements.
- If you do not know an answer, say so.
- Prioritize the Mission Control Dashboard and Job Tracker App when asked about React projects.
`;

    // Send the request to Groq's Chat Completions API.
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: [
            { role: "system", content: instructions },
            { role: "user", content: message.trim() },
          ],
          max_tokens: 400,
          temperature: 0.5,
        }),
      }
    );

    const data = await response.json();

    // Handle API errors without exposing secrets.
    if (!response.ok) {
      console.error("Groq API error:", data.error?.message);

      return res.status(502).json({
        error: "The AI service could not process your request.",
      });
    }

    // Read Groq's generated answer.
    const reply =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn't generate a response.";

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Chat backend error:", error.message);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
}
