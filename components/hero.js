import React, { useState } from 'react'
import useInterval from './hooks/useInterval'
import Link from 'next/link'


const Hero = () => {
    const [count, setCount] = useState(0);
    const [words, setWords] = useState(["JavaScript", "Rock n'Roll", "New Wave", "ReactJS", "products", "the Web", "Iron Maiden", "prototyping ", "Stanley Kubrick's movies" ]);


    useInterval(() => {
        // Your custom logic here

        setCount(Math.floor(Math.random() * ((words.length - 1) - 0 + 1)) + 0);



      }, 1000);

    return (
    <section className="hero">
        <div className="hero-body">
            <div className="container container-title">
                <h1 className="title">
                    Hi I'm Paul and I love <span>{words[count]}</span>
                </h1>

            </div>
            <div className="container controls">
                <div className="field has-addons">
                    <div class="control">
                        <input id="love-adder" className="input" type="text" placeholder="Add Something I love" />
                    </div>
                    <div className="control">
                        <a onClick={() => { setWords([...words, document.getElementById('love-adder').value ])}} className="button is-info">
                        Add
                        </a>
                    </div>
                </div>
            </div>
        </div>


        <style jsx>{`
            .hero {
                height: 30em;
            }
            .input {
                margin-bottom: 3em;
            }

            .container-title {
                height: 15em;
            }


            .hero-body {
                margin-top: 4em;
            }

            .title {
                font-size: 4em;
                font-weight: 800;
            }
        `}</style>
    </section>
  )
}

  export default Hero
