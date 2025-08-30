import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download route
  app.get("/api/resume/download", async (req, res) => {
    try {
      const resumePath = path.join(process.cwd(), "attached_assets", "Mohamed_Hasan_Resume.pdf");
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mohamed_Hasan_Resume.pdf"');
      
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

  // Contact form submission route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // In a real application, you would send an email here
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
