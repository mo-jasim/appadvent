import React from 'react'
import Claim360 from './Claim360'
import TheResults from './TheResults'
import Opportunities from './Opportunities'
import UiShowcase from './UiShowcase'

import Solutions1 from './Solutions.'
import Essential from '../Abouts/Essential'
import Technology_Stack1 from './Technology_Stack1'
import Results from '../Abouts/Results'


function Blogmain() {
  return (
    <div>
     <Claim360/>
     <Results/>
     {/* <TheResults/> */}
     <Opportunities/>
<Solutions1/>
<Essential/>
<Technology_Stack1/>

     <UiShowcase/>
    </div>
  )
}

export default Blogmain
