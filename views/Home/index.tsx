import { NoteList, Wrapper } from '@components'

function Home(): JSX.Element {
  return (
    <section>
      <Wrapper>
        <div>
          <NoteList />
        </div>
      </Wrapper>
    </section>
  )
}

export default Home
