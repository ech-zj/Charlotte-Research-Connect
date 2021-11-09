/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Particles from 'react-tsparticles'

export default () => {
    return (
        <Particles
            width='100vw'
            height='100vh'
            style={{ overflow: 'hidden' }}
            options={{
                background: {
                    color: {
                        value: "#2C2F33"
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onHover: {
                            enable: true,
                            mode: [],
                            parallax: {
                                enable: true,
                                force: 20,
                                smooth: 10,
                            }
                        }
                    }
                },
                particles: {
                    number: {
                        value: 75,
                    },
                    color: {
                        value: '#046A38'
                    },
                    links: {
                        color: "#B9975B",
                        distance: 250,
                        enable: true,
                        opacity: .5,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'random',
                        random: true
                    },
                }
            }}
        />
    )
}