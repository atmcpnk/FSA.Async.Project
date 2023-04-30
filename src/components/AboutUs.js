// About Us component  
import React from 'react';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';


const AboutUs = () => {
    return (
        <>
            <div id='about-us-container'>
                <main>
                    <h1>About Our Team</h1>
                </main>
                <aside id='about-us-bio'>
                    <h2>Our Story</h2>
                    <p>Ligula eget sociis imperdiet sodales inceptos sit morbi class imperdiet. Pulvinar facilisi mattis viverra sed tristique aliquam vel rutrum primis. Id primis per sociosqu rhoncus venenatis taciti felis justo velit tortor. Nullam ipsum porta nibh eros dictumst lectus in. Diam posuere risus pulvinar lacus lacus. Pulvinar quisque, mollis iaculis curabitur aenean eleifend lobortis suscipit. Tempor proin, ultrices velit. Erat bibendum eleifend netus integer etiam potenti justo eget himenaeos sed, gravida quisque. Odio augue tempor nulla cras urna convallis fusce curae; ridiculus vivamus velit. Tortor eget, dolor ultricies. Neque.

Dictumst enim class faucibus hac, orci condimentum. Quisque, blandit feugiat massa senectus. Dictumst tincidunt dictum sem interdum, inceptos sem! Class sit vitae morbi mollis luctus magna eget tempus. Erat bibendum lectus velit curae; ac condimentum cras lorem lacus. Parturient tortor cum suscipit diam dictum. Phasellus volutpat vulputate hendrerit mollis pretium. Ultrices facilisi tincidunt nulla consectetur, fringilla gravida dui tortor malesuada habitasse. Velit id fusce primis facilisis massa fames proin lobortis euismod. Pellentesque auctor senectus volutpat nascetur magnis sollicitudin tortor.</p>
                </aside>
                <aside id='about-us-team'>
                    <h2>Our Team</h2>
                    <NavLink to='/team-member' id='team-member-link'>
                    <img src='https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' alt='team member' />
                    <h3 id='team-member'>Team Member</h3>
                    </NavLink> 
                    <NavLink to='/team-member' id='team-member-link'>
                    <img src='https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' alt='team member' />
                    <h3 id='team-member'>Team Member</h3>
                    </NavLink> 
                </aside>
            </div>
            <Footer id='footer'/>
        </>
    )
};

export default AboutUs;