import { db } from "./db.js";  // Ensure the correct path
import { resumes } from "./models/schema.js";
import { eq } from "drizzle-orm";

async function seedDatabase() {
  try {
    console.log("Seeding database with demo data...");

    // Insert demo resumes
    await db.insert(resumes).values([
        {
          userId: 1,
          title: "Software Engineer Resume",
          summary: "This is a sample resume for a software engineer position.",
        },
        {
          userId: 2,
          title: "Data Scientist Resume",
          summary: "This resume contains experience in machine learning and AI.",
        },
        {
          userId: 1,
          title: "Frontend Developer Resume",
          summary: "A detailed resume highlighting frontend development skills.",
        },
      ]);
      

    console.log("Demo data inserted successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error inserting demo data:", error);
    process.exit(1);
  }
}

// Run the seeding function
seedDatabase();
