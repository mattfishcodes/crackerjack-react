import { client } from '@/sanity/client'

const problemQuery = `*[_type == "homePage"][0]{problem}`

const PaintPointsSection = async () => {
  const content = await client.fetch(problemQuery)

  const problem = content.problem

  return (
    <>
      <h3>{problem.heading}</h3>
      <ul>
        {problem.problems.map((p: string) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </>
  )
}

export default PaintPointsSection
