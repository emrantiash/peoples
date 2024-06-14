"use client"
import { useEffect ,useState} from "react";
import { useDispatch } from "react-redux";
import { setbreadcrumb } from "./redux/slices/breadcrumbSlice";
import Duration from "./components/duration/Duration";
import Calendar from "./components/calender/Calender";
import Month from "./components/month/Month";
import Event from "./components/event/Event";
import MyTeam from "./components/myteam/MyTeam";
import OnLeave from "./components/onleave/OnLeave";
import Announcement from "./components/announcement/Announcement";
import Ticket from "./components/ticket/Ticket";
import Network from "./utils/network/Network";

import cookieCutter from 'cookie-cutter';
 import cookiesNames from '@/app/utils/constant';

import useIsLogin from "./lib/hooks/isLogin";


const top = 10;
const normal = { fontWeight: "normal", color: "#000" };
const dates = [
  {
      id : 1 ,
      date : '2024-04-01',
      title : 'present',
      status : 1
  },
  {
      id : 2 ,
      date : '2024-04-02',
      title : 'present',
      status : 1
  },
  {
      id : 3 ,
      date : '2024-04-03',
      title : 'present',
      status : 1
  },
  {
      id : 4 ,
      date : '2024-04-04',
      title : 'absent',
      status : 2
  },
  {
      id : 3 ,
      date : '2024-04-05',
      title : 'present',
      status : 1
  },
  {
      id : 4 ,
      date : '2024-04-06',
      title : 'absent',
      status : 1
  },
  {
      id : 5 ,
      date : '2024-04-07',
      title : 'present',
      status : 2
  },
  {
      id : 6,
      date : '2024-04-08',
      title : 'absent',
      status : 1
  }
]

export default function Home() {
  const dispatch = useDispatch()
  const useLogin = useIsLogin()

  // useEffect(()=>{
  //   dispatch(setbreadcrumb(["Home"]))
  //   cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS) === undefined ? window.location.href = Network.suiteNetwork
  //    : ''
  // },[dispatch])
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // <div>HELLO MONSTAR PEOPLE.</div>
    // </main>
    <main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <Duration />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Calendar dates = {dates}  />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Month />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Ticket />
            {/* <div
              className="row">
              <div>
                <Ticket />
              </div>

              <div>
                <Submit />
              </div>
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <Event />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <MyTeam />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <OnLeave />
          </div>
          <div className="col-xl-3 col-md-6 mb-4">
            <Announcement />
          </div>
        </div>
      </div>
    </main>
  );
}
