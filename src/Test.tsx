import React from 'react'
import tw from 'twin.macro'

const InnerContent = tw.section`px-4 md:px-8`
const Section = tw(
  InnerContent,
)`relative overflow-hidden py-12 even-of-type:bg-white md:py-20`

const Test = () => (
  <div className="group">
    <button
      css={[
        tw`group-hocus:translate-y-2.5`,
        tw`hocus:(bg-primary-500 text-white)`,
        tw`group-hocus:(visible opacity-100 max-h-[348px])`,
      ]}
      tw="bg-purple-700"
    >
      Hocus
    </button>
    <Section>
      <InnerContent>...</InnerContent>
    </Section>
    <Section>
      <InnerContent>...</InnerContent>
    </Section>
    <Section>
      <InnerContent>...</InnerContent>
    </Section>
    <Section>
      <InnerContent>...</InnerContent>
    </Section>
  </div>
)

export default Test
