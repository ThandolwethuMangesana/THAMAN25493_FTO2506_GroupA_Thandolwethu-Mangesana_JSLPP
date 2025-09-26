/**
 * Fetches tasks from the Kanban API with error handling.
 * @returns {Promise<Array<Object>>} Tasks array from API or empty array on failure.
 */
export async function fetchTasksFromAPI() {
  let data = [];
  try {
    const res = await fetch("https://jsl-kanban-api.vercel.app/", {
      headers: { "Accept": "application/json" }
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.error("Failed to fetch:", err);
    data = []; // fallback handled in main.js
  } finally {
    console.log("API fetch attempt finished");
  }
  return data;
}
