"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getLocation } from "@/app/redux/slices/locationSlice";
import Button from "@/app/components/button/Button";
import { saveDocument, getActionType } from "@/app/redux/slices/masterSlices";
import { useRouter } from "next/navigation";

const thead = [
  {
    id: 1,
    name: "Location",
  },
  {
    id: 2,
    name: "Country",
  },
  
  {
    id: 3,
    name: "City",
  },
  {
    id : 4,
    name : "#Of Employee"
  }
 
];

export default function page() {
  const router = useRouter()
  const dispatch = useDispatch();
  const tail = "isActiveOnly=false";
  const [address, setAddress] = useState([]);

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Location"]));
    dispatch(getLocation(tail)).then(function (e) {
      e.payload && e.payload.success && setAddress(e.payload.payload[0]);
    });
  }, [dispatch]);

  console.log(address);

  const _tableOptions = (row) => {
    console.log(row)
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/master/location/add");
  };

  const _saveActionType = (_val) => {
    dispatch(saveDocument({}));
    dispatch(getActionType(_val));
  };

  return (
    <div>
      <div className="row">
        <div className="col-9"></div>
        <div className="col-3">
          <Link
            href="/master/location/add"
            onClick={() => _saveActionType("Add")}
          >
            <Button
              class="btn btn-success text-table"
              text="Add Location"
              icon={<i className="fas fa-plus"></i>}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr />
        </div>
      </div>
      <div className="row" style={{
        margin: 20
      }}>
       
      </div>
      &nbsp;
      <div className="row" style={{
        margin: 20
      }}>
        
      </div>
    </div>
  );
}
