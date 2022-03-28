import fs from "node:fs/promises";
import path from "node:path";

export const copy = async (name, inputDir, outputDir, throwOnError = false) => {
	try {
		await fs.copyFile(path.join(inputDir, name), path.join(outputDir, name));
	} catch (error) {
		if (throwOnError) {
			throw error;
		} else {
			console.error(error);
		}
	}
};
