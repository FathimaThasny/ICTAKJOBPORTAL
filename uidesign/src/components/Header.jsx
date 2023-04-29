import React from 'react'

export const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">ICT Accademy</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/employsignup">Post a Job/Employer Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/alumni">SignUp </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/adminhome">Admin </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
