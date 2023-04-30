import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";

const TeamMember = () => {
    return (
        <>
            <div id="team-member-ctr">
                <h1 id="team-member-title">Team Member</h1>
                <img src='https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg' alt='team member' />
                <h3 id='member-bio-title'>Member Bio</h3>
                <p id="member-bio">Mus nec mi taciti sagittis egestas cum rhoncus. Aliquam lorem, suscipit netus. Vel maecenas mollis augue hendrerit etiam dignissim fringilla! Dapibus, semper enim sit tellus nisl! Pellentesque interdum dolor metus ultricies donec curabitur vivamus fusce bibendum maecenas nunc class. Tortor ullamcorper libero parturient magnis proin blandit nunc quis quam urna urna. Rutrum ornare pellentesque viverra sociis.
                </p>
            </div>
            <footer>
                <Footer/>
            </footer>
        </>
    )
};

export default TeamMember;