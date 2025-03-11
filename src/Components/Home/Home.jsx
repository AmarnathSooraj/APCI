import React from 'react'
import './Home.css'
import a from '../../assets/clg.jpg'
import ica from '../../assets/INTERNATIONAL-CONFERENCE-ALERTS.png'
function Home() {
  return (
    <div>
      <img className='sec1' src={a}/>
      <section className='sec2'>
        <div className='left'>
        <p className='heading'>ABOUT <span>APCI</span></p>
        <div  className='para'><p>
              InRACs -2025  is an International Conference on Recent Advancements in Computing and 
              System Design (InRACS-2025 )  organised by Department of Electronics and Communication 
              Engineering Vadakara,  Kozhikode, Kerala, India. The conference is intended for technical 
              exchange amongst researchers in various emerging fields of Signal Processing, Artificial 
              Intelligence, Machine Learning, Bigdata Analytics Communication, Robotics, Automation and 
              Control, VLSI  and Embedded System, spanning across five tracks. The technical program 
              includes keynote lectures, technical sessions and special sessions by Auminae of our Institution . 
          </p>
          <p>
          Department  of Electronics and Communication Engineering is started n 1999, the primary 
          objective of the department has been to impart quality education and training at the 
          undergraduate level in various areas of Electronics and Communication Engineering.  The 
          department has been consistently producing engineering graduates of high caliber who occupy 
          prestigious positions in the academic and industrial fields. 
          </p>
          <p>
          The College of Engineering, Vadakara is the first College established by the Co-operative 
          Academy of Professional Education, which started functioning in the year June 1999.The 
          College is located at Vadakara, a region lying in the northern part of Kozhikode district. It is 
          located on a 26-acre campus at Kakkoramala in Kurunthodi, in the Maniyoor panchayat of 
          Vadakara.
          </p>
          </div>
          <div>
          <p className='heading'>SCOPE <span>OF THE CONFERENCE</span></p>
          <ul className='para2'>
          <li>
            <span class="track-title">Track 1: Artificial Intelligence & Machine Learning</span><br/>
            Foundations of AI & ML, Deep Learning & Neural Networks, Reinforcement Learning, Generative AI, Multimodal AI, Neuromorphic Computing, AI Ethics, AI for Healthcare, Explainable AI, AI in Autonomous Systems.
        </li>
        <li>
            <span class="track-title">Track 2: Big Data & Analytics</span><br/>
            Big Data Analytics, Distributed Computing, Parallel Processing, Cloud-based Big Data, Edge Computing, Machine Learning for Big Data, Real-time Stream Processing, Data Science, Statistical Analysis, Big Data Visualization, Interactive Dashboards, Cybersecurity, Blockchain for Secure Transactions.
        </li>
        <li>
            <span class="track-title">Track 3: Communication & Networking</span><br/>
            6G Networks and Beyond, Optical & Satellite Communication, Free Space Optical (FSO) Communication, Quantum Communication, AI-Driven Wireless Networks, Energy-Efficient Wireless Communication, UAV & Drone Networks, IoT Communication, Secure Communication Systems, Cryptographic Techniques.
        </li>
        <li>
            <span class="track-title">Track 4: Robotics & Automation</span><br/>
            Autonomous Robots, AI in Robotics, Swarm & Aerial Robotics, Industrial & Service Robotics, Robotics for Healthcare & Rehabilitation, AI-Powered Surgical Robots, Computer Vision for Robotics, Gesture & Emotion Recognition, Ethical AI in Robotics, Cybersecurity in Robotics.
        </li>
        <li>
            <span class="track-title">Track 5: Automation & Control Systems</span><br/>
            Intelligent Control Systems, AI & ML in Automation, Embedded Control Systems, IoT-enabled Smart Control, Process Control & Optimization, Smart Sensors & Actuators, AI for Sensor Fusion, Robotics Motion Planning, AI-based Trajectory Optimization, Smart Grid Automation, AI-driven Energy Management.
        </li>
        <li>
            <span class="track-title">Track 6: VLSI & Embedded Systems</span><br/>
            Digital & Analog VLSI, ASIC & FPGA Design, Reconfigurable Architectures, Emerging Memory Technologies, Quantum Computing Circuits, AI/ML for VLSI Automation, Microcontroller-based Design, Real-Time Operating Systems (RTOS), RISC-V Architectures, Edge AI, 3D ICs, Sustainable VLSI Design, AI-Driven Embedded Security.
        </li>
          </ul>
          </div>
          </div>
          <div className='right'>
           <div className='head1'>
              <p>IMPORTANT <span>LINKS</span></p>
              <div className='btns'>
                <button>Submit your paper</button>
                <button>Paper Submission Submission guidelines</button>
                <button>Call for Paper</button>
              </div>
              <img src={ica} alt="" />
           </div>
           <div className='head1'>
              <p>IMPORTANT <span>DATES</span></p>
              <ul className='list-items'>
                <li>Last date for paper submission : <a href='#'>15th April  2025</a> </li>
                <li>Acceptance notification : <a href='#'>15th May,  2025</a></li>
                <li>Last date for camera ready copy submission : <a href='#'>30th May 2025</a></li>
              </ul>
           </div>
           <div className='contact-list'>
              <div className='g1'>
                <p className='pos'>Patrons:</p>
                <div className='c1'>
                <p className='name'>Dr. Thajudheen Ahamad V I, Director CAPE,</p>
                <button>email</button>  
                <p className='name'>Dr. S Jayakumar, Joint Director CAPE</p>
                <button>email</button>
                <p className='name'>Dr. P S Sathidevi, Professor DEpt of ECE, NIT Calicut</p>
                <button>email</button>
                </div>
              </div>
              <div className='g1'>
                <p className='pos'>Chairman:</p>
                <div className='c1'>
                <p className='name'>Dr. K G Balakrishnan , Chairman BOG, CE Vadakara </p>
                <button>email</button>  
                </div>
              </div>
              <div className='g1'>
                <p className='pos'>Vice Chairman:</p>
                <div className='c1'>
                <p className='name'>Dr. Vinod Pottakulath ,Principal, CE Vadakara </p>
                <button>email</button>  
                </div>
              </div>
              <div className='g1'>
                <p className='pos'>Co-ordinator:</p>
                <div className='c1'>
                <p className='name'>Dr. C K Smitha, Asso.Professor,  Dept of ECE, CE Vadakara.</p>
                <button>email</button>  
                </div>
              </div>
           </div>
          </div>
      </section>
    </div>
  )
}

export default Home
