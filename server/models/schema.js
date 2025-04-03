// models/schema.ts
import { pgTable, serial, varchar, text, timestamp, integer } from "drizzle-orm/pg-core";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).unique(),
  password: text("password"), // (hashed password)
  createdAt: timestamp("created_at").defaultNow()
});

// Resumes table
export const resumes = pgTable("resumes", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }),
  summary: text("summary"),
  createdAt: timestamp("created_at").defaultNow()
});

// (Optional) Experience table
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  resumeId: integer("resume_id").references(() => resumes.id, { onDelete: "cascade" }),
  company: varchar("company", { length: 255 }),
  role: varchar("role", { length: 255 }),
  description: text("description"),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date")
});
