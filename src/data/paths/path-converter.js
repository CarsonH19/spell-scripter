export default function normalizePathData(pathData) {
  // Parse the path data into commands and coordinates
  const commands = pathData.match(/[a-zA-Z][^a-zA-Z]*/g);
  if (!commands) return "";

  // Initialize bounding box values
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;

  // Extract coordinates and find the bounding box
  const coordinates = commands.map((command) => {
    const type = command[0];
    const nums = command.slice(1).trim().split(/[ ,]+/).map(Number);

    for (let i = 0; i < nums.length; i += 2) {
      const x = nums[i];
      const y = nums[i + 1];
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }

    return { type, nums };
  });

  // Calculate bounding box dimensions
  const bboxWidth = maxX - minX;
  const bboxHeight = maxY - minY;

  // Normalize the coordinates and round to 2 decimal places
  const normalizedPathData = coordinates
    .map(({ type, nums }) => {
      const normalizedNums = nums.map((num, index) => {
        let normalizedValue;
        if (index % 2 === 0) {
          // Normalize x coordinate
          normalizedValue = (num - minX) / bboxWidth;
        } else {
          // Normalize y coordinate
          normalizedValue = (num - minY) / bboxHeight;
        }
        // Round to 2 decimal places
        return Math.round(normalizedValue * 100) / 100;
      });

      // Validate the number of parameters for each command
      if (
        (type === "M" || type === "L" || type === "T") &&
        normalizedNums.length % 2 !== 0
      ) {
        throw new Error(`Invalid number of parameters for command ${type}`);
      }
      if (
        (type === "C" || type === "S" || type === "Q") &&
        normalizedNums.length % 4 !== 0
      ) {
        throw new Error(`Invalid number of parameters for command ${type}`);
      }
      if (type === "A" && normalizedNums.length % 7 !== 0) {
        throw new Error(`Invalid number of parameters for command ${type}`);
      }

      // Ensure there is a space between the command type and the coordinates
      return `${type} ${normalizedNums.join(" ")}`.trim();
    })
    .join(" ");

  return normalizedPathData;
}
