import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes
  app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
