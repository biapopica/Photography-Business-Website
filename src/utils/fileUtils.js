import { readdir } from 'fs/promises'
import path from 'path'

const getDirectories = async (source) =>
	(await readdir(source, { withFileTypes: true }))
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name)

const getPages = async (relPath) => {
	const directories = await getDirectories(path.resolve(relPath))
	return directories
}

const getFiles = async (relPath) => {
	const absolutePath = path.resolve(relPath)
	const files = (await readdir(absolutePath, { withFileTypes: true }))
		.filter((dirent) => dirent.isFile())
		.map((dirent) => dirent.name)
	return files
}

export { getPages, getFiles }
