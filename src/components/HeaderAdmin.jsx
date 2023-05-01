import React from 'react'

export const HeaderAdmin = () => {
  return (
<div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">ICT Accademy</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end sticky-top" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/home">Post a Job</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/postnewjob">Notification</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/employsignup">Logout</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </div>  )
}
