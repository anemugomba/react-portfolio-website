export default interface Project {
    id: string | number,
    coverImage: string,
    technologies: string[],
    description: string,
    title: string,
    liveLink: string,
    githubLink: string,
    moreInfoLink: string,
    images: string[]
}