import React from 'react';

const Blog1 = () => {
  return (
    <div className="container my-5">
      <article className="blog-post">
        <h1 className="blog-title mb-4">Installing Linux Subsystem for Windows 11</h1>
        
        <div className="meta-info mb-4">
          <span className="date">Oct 5, 2024</span>
          <span className="category ms-3 badge bg-primary">Technical</span>
        </div>

        <div className="blog-content">
          <section className="introduction mb-4">
            <h2>Introduction</h2>
            <p>
              Windows Subsystem for Linux (WSL) is a powerful feature that allows developers 
              to run a Linux environment directly on Windows 11, without the need for a 
              traditional virtual machine or dual-boot setup.
            </p>
          </section>

          <section className="prerequisites mb-4">
            <h2>Prerequisites</h2>
            <ul>
              <li>Windows 11 (Build 22000 or higher)</li>
              <li>Administrator access to your computer</li>
              <li>An internet connection for downloading components</li>
            </ul>
          </section>

          <section className="installation-steps mb-4">
            <h2>Installation Steps</h2>
            
            <h3>Method 1: Using Windows PowerShell</h3>
            <ol>
              <li>
                <p>Open PowerShell as Administrator</p>
                <pre className="bg-light p-3">
                  wsl --install
                </pre>
              </li>
              <li>
                <p>Restart your computer when prompted</p>
              </li>
              <li>
                <p>After restart, wait for the Ubuntu installation to complete</p>
              </li>
              <li>
                <p>Set up your Linux username and password when prompted</p>
              </li>
            </ol>

            <h3>Method 2: Using Windows Features</h3>
            <ol>
              <li>Open Windows Features (Control Panel → Programs → Turn Windows features on or off)</li>
              <li>Check "Windows Subsystem for Linux"</li>
              <li>Click OK and restart when prompted</li>
              <li>Open Microsoft Store and search for your preferred Linux distribution</li>
              <li>Click Install and follow the setup instructions</li>
            </ol>
          </section>

          <section className="verification mb-4">
            <h2>Verifying the Installation</h2>
            <p>To verify that WSL is installed correctly, open PowerShell and run:</p>
            <pre className="bg-light p-3">
              wsl --list --verbose
            </pre>
            <p>This should display your installed Linux distribution(s) and their status.</p>
          </section>

          <section className="troubleshooting mb-4">
            <h2>Common Issues and Solutions</h2>
            <ul>
              <li>
                <strong>Error 0x80070003:</strong> Enable virtualization in your BIOS settings
              </li>
              <li>
                <strong>Installation Failed:</strong> Make sure Windows is fully updated
              </li>
              <li>
                <strong>WSL 2 Required:</strong> Update to WSL 2 using 'wsl --set-version Ubuntu 2'
              </li>
            </ul>
          </section>

          <section className="conclusion">
            <h2>Conclusion</h2>
            <p>
              With WSL now installed on your Windows 11 system, you can start using Linux 
              commands and tools alongside your Windows applications. This creates a powerful 
              development environment that combines the best of both operating systems.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default Blog1;