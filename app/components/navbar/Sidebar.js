import React,{useEffect,useState} from "react";
import Link from "next/link";
import useIsAccess from "@/app/lib/hooks/isAccess";
import Network from "@/app/utils/network/Network";

import cookieCutter from 'cookie-cutter';
 import cookiesNames from '@/app/utils/constant';
 import styles from "./Sidebar.style";

export default function Sidebar() {
    const isAccess = useIsAccess()
 
    // useEffect(()=>{
    //   cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS) === undefined ? window.location.href = Network.suiteNetwork
    //    : ''
    // })

    // sidebar-dark .nav-item .nav-link :: font color

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // backgroundColor : '#fff'
      }}
    >
      <ul
        // className="navbar-nav bg-gradient-light sidebar sidebar-dark accordion"
        className="navbar-nav   sidebar sidebar-dark accordion"

        style={{backgroundColor : '#fff',
      borderRight : '2px solid #f6f6f6'
      }}
        id="accordionSidebar"
      >
         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                <div className="sidebar-brand-icon rotate-n-15">
                  <span style={styles.brandColor}> <i className="fas fa-laugh-wink"></i> </span>  
                </div>
                <div className="sidebar-brand-text mx-1">
                  <span style={styles.titleStyle}>Monstar <span style={{color : '#69c7bd'}}>People</span> </span></div>
            </a>

        {/* <hr className="sidebar-divider my-0" /> */}

        <li className="nav-item ">
          <Link className="nav-link" href="/">         
                  <i className="fas fa-home" ></i>                
            <span style={styles.menuFont}>Home</span>
          </Link>
        </li>

        {/* <hr className="sidebar-divider" /> */}
        <li className="nav-item ">
          <Link className="nav-link text-xs" href="/dashboard">
            <i className="fas fa-table" ></i>
            <span  style={styles.menuFont}>Dashboard</span>
          </Link>
        </li>
       
        {/* <div className="sidebar-heading">Interface</div> */}
        
        <li className="nav-item">
          <a className="nav-link" href="/my-info">
            <i className="fas fa-user"></i>
            <span style={styles.menuFont}>My Info</span>
          </a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/people">
          <i className="fas fa-users"></i>
            <span style={styles.menuFont}>People</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePagesReport"
            aria-expanded="true"
            aria-controls="collapsePages99"
          >
            <i className="fas fa-folder"></i>
            <span style={styles.menuFont}>Reports </span>
          </a>
          <div
            id="collapsePagesReport"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <Link className="collapse-item" href="/setting/org-profile">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-folder"></i>
                </span>
                <span> Report 1</span>
              </Link>
              
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Report 2 </span>
              </a>
              
            </div>
          </div>
        </li>
{
    isAccess[1] &&
    <li className="nav-item">
    <a
      className="nav-link collapsed"
      href=""
      data-toggle="collapse"
      data-target="#collapsePagesPayroll"
      aria-expanded="true"
      aria-controls="collapsePagesPayroll"
    >
      <i className="fas fa-comment-dollar"></i>
      <span style={styles.menuFont}>Payroll </span>
    </a>
    <div
      id="collapsePagesPayroll"
      className="collapse"
      aria-labelledby="headingPages"
      data-parent="#accordionSidebar"
    >
      <div className="bg-white py-2 collapse-inner rounded">
        <Link className="collapse-item" href="/setting/org-profile">
          <span style={{ color: "", size: 30 }}>
            
          </span>
          <span> Dashboard</span>
        </Link>
        
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
           
          </span>
          <span> Pay Runs </span>
        </a>
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
           
          </span>
          <span> Revision </span>
        </a>
        <a className="collapse-item" href="blank.html">
          <span style={{ color: "", size: 30 }}>
            
          </span>
          <span> Loan </span>
        </a>
        
      </div>
    </div>
  </li>
}
       
        <li className="nav-item">
        <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePagesMaster"
            aria-expanded="true"
            aria-controls="collapsePagesMaster"
          >
            <i className="fas fa-table-tennis"></i>
            <span style={styles.menuFont}>Master </span>
          </a>
          <div
            id="collapsePagesMaster"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <a className="collapse-item" href="/employment" >
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-user-friends"></i>
                </span>
                <span> Employment Type</span>
              </a>

              <a className="collapse-item" href="/division">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-home"></i>
                </span>
                <span> Division </span>
              </a>
              <a className="collapse-item" href="/department">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calculator"></i>
                </span>
                <span> Department </span>
              </a>
              <a className="collapse-item" href="/location">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-location-arrow"></i>
                </span>
                <span> Location </span>
              </a>
              <a className="collapse-item" href="/designation">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-birthday-cake"></i>
                </span>
                <span> Designation </span>
              </a>
              <a className="collapse-item" href="/bank">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-home"></i>
                </span>
                <span> Bank </span>
              </a>
              
              {/* <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Report 2 </span>
              </a> */}
              
            </div>
          </div>
        </li>
      

    
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href=""
            data-toggle="collapse"
            data-target="#collapsePages99"
            aria-expanded="true"
            aria-controls="collapsePages99"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span style={styles.menuFont}>Setting </span>
          </a>
          <div
            id="collapsePages99"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              {/* <h6 className="collapse-header">Login Screens:</h6> */}
              <Link className="collapse-item" href="/setting/org-profile">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-building fa-x"></i>
                </span>
                <span> Organization Profile</span>
              </Link>
              <a className="collapse-item" href="register.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-virus fa-x"></i>
                </span>
                <span> Social Security</span>
              </a>
              <a className="collapse-item" href="/salary-component">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calculator fa-x"></i>
                </span>
                <span> Salary Components</span>
              </a>
              <div className="collapse-divider"></div>
              {/* <h6 className="collapse-header">Other Pages:</h6> */}
              <a className="collapse-item" href="/salary-templates">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-money-bill fa-x"></i>
                </span>
                <span> Salary Templates</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-memory"></i>
                </span>
                <span> Employer Details</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-calendar"></i>
                </span>
                <span> Pay Schedule</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-bars"></i>
                </span>
                <span> Preferences</span>
              </a>
              <a className="collapse-item" href="/user-roles">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-user"></i>
                </span>
                <span> User & Roles</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-tags"></i>
                </span>
                <span> Roporting Tags</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-envelope"></i>
                </span>
                <span> Email Templates</span>
              </a>
              <a className="collapse-item" href="blank.html">
                <span style={{ color: "", size: 30 }}>
                  <i className="fas fa-chalkboard"></i>
                </span>
                <span> Templates</span>
              </a>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </div>
  );
}
