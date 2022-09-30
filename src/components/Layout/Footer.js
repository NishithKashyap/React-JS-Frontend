import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4  pb-0'  style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/Nitup_official-104907148919179/' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com/nitup_official?igshid=YmMyMTA2M2Y=' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/nitup-official/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          KNITUP.com
        </a>
        {/* Copyright &copy; knitup */}
      </div>
    </MDBFooter>
  )
}

export default Footer

{/* <div className="footer">
        <footer>
            <MDBFooter className='bg-dark text-center text-white' style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                <MDBContainer className='p-4 pb-0'>
                    <section className='mb-4'>
                        <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/Nitup_official-104907148919179/' role='button'>
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn outline color="light" floating className='m-1' href='https://instagram.com/nitup_official?igshid=YmMyMTA2M2Y=' role='button'>
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/nitup-official/' role='button'>
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}> 
                    Copyright &copy; knitup
                </div>
            </MDBFooter>
        </footer>
    </div> */}