import React from "react";
import { Outlet } from "react-router-dom";
function Profile() {
    return (
        <div>
            <div>
                <h1>Profile</h1>
            </div>

            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default Profile