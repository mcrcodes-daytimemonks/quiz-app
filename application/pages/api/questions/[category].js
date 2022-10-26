export default function handler(req, res) {
  console.log("test");
  res.status(200).json({ name: "John Doe" });
}
