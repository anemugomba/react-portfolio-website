import React from 'react'

function Footer() {
    const redirectSocial = (url: string) => {
        window.open(url, '_blank')
    }

    return (
        <div className='footer'>
            <div>
                <div className='social-icons'>
                    <i className="fa fa-github fa-xs" onClick={() => redirectSocial('https://github.com/anemugomba')}></i>

                    <i className="fa fa-linkedin-square" onClick={() => redirectSocial('https://www.linkedin.com/in/anesu-mugomba-a51a851a2/')}></i>

                    <i className="fa fa-twitter" onClick={() => redirectSocial('https://twitter.com/mambowechidiki')}></i>

                    <i className="fa fa-at" onClick={() => redirectSocial('mailto:anesucain@gmail.com')}></i>

                    <i className="fa fa-phone" onClick={() => redirectSocial('tel:+263774721305')}></i>

                </div>
            </div>
        </div>
    )
}

export default Footer