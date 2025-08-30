import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import { fileURLToPath } from "url"; // <-- ADD THIS IMPORT

// --- ADD THESE TWO LINES TO FIX '__dirname is not defined' ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // --- CORRECTED RESUME DOWNLOAD ROUTE ---
 // In server/routes.ts

app.get("/api/resume/download", async (req, res) => {
  try {
    // UPDATED to use the new, simpler filename
    const correctFilename = "Mohamed_Hasan_Resume.pdf";

    const resumePath = path.join(__dirname, "..", "attached_assets", correctFilename);
    const downloadFilename = "Mohamed_Hasan_Resume.pdf";
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${downloadFilename}"`);
    
    res.sendFile(resumePath, (err) => {
      if (err) {
        console.error('Error sending resume file:', err);
        res.status(404).json({ message: "Resume file not found" });
      }
    });
  } catch (error) {
    console.error('Resume download error:', error);
    res.status(500).json({ message: "Error downloading resume" });
  }
});

  // --- UNCHANGED CONTACT FORM ROUTE ---
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      console.log('Contact form submission:', { name, email, message });
      res.json({ message: "Message sent successfully" });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ message: "Error sending message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}