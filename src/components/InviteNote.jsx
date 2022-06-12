import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. B. Azam Khan</h2>
                <h5>Prop.: Mehboob Saw Mill, Madhavaram Road, Adoni.</h5>
                <h5>
                    H.No.: 24/94, Havanapet, Adoni,
                    <br />
                    Kurnool Dist., AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 96762 35707 <br />
                    +91 97019 09737 <br />
                    +91 62812 71992.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
