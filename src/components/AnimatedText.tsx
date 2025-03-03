import * as motion from "motion/react-client"


const QUOTE = {
  hidden: {
    opacity: 1,
  },
  visibility: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const SINGLEWORD = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visibility: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
    }
  }
}

interface AnimatedTextProps {
  text : string,
  className: string
}

const AnimatedText = ({ text, className } : AnimatedTextProps) => {
  return (
    <div
      className="py-2 w-full mx-auto flex flex-col items-center justify-center text-center
      overflow-hidden sm:py-0"
    >     
      <motion.h1
        className= {`inline-block text-dark dark:text-light
          text-8xl font-bold w-full capitalize ${className} xl:text-6xl`}
        variants= { QUOTE }
        initial= "hidden"
        animate= "visible"
      >

        {
          text.split(" ").map((char, index) => {
            return (
              <motion.span
                className= "inline-block"
                key= {char + "-" + index}
                variants= {SINGLEWORD}
              >
                { char }&nbsp;
              </motion.span>
            );
          })
        }
      </motion.h1>
    </div>
  )
}

export default AnimatedText;