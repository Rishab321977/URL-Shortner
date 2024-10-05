import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState('')
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault()
    if (longUrl) {
      navigate(`/auth?createNew=${longUrl}`)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold'>
        The only URL Shortner <br />
        you&rsquo;ll ever need!
      </h2>
      <form
        onSubmit={handleShorten}
        className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'
      >
        <Input
          type='url'
          value={longUrl}
          placeholder='Enter your long URL'
          onChange={(e) => setLongUrl(e.target.value)}
          className='h-full flex-1 py-4 px-4'
        />
        <Button className='h-full' type='submit' variant='destructive'>
          Shorten!
        </Button>
      </form>
      <img src='/banner.jpeg' alt='banner' className='w-full my-11 md:px-11' />

      <Accordion type='multiple' collapsible className='w-full md:px11  '>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            How does the Trimrr URL Shortner works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our systems generates a shorter version
            of that URL.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes creating an account allows you to manage your URLs , view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            What analytics are available for my shortened URL?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, the location of the clicks, and
            device types (mobile, desktop, tablet) of the clicks.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default LandingPage
