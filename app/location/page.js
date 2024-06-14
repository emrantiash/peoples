"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getLocation } from "@/app/redux/slices/locationSlice";
import Button from "@/app/components/button/Button";
import { saveDocument, getActionType } from "@/app/redux/slices/masterSlices";
import Loading from "../components/loading/Loading";
import Table from "../components/table/Table";
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
    id: 4,
    name: "#Of Employee"
  }

];

export default function page() {
  const router = useRouter()
  const dispatch = useDispatch();
  const tail = "isActiveOnly=false";
  const [address, setAddress] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Location"]));
    dispatch(getLocation(tail)).then(function (e) {
      e.payload && e.payload.success && setAddress(e.payload.payload[0]);
    });
  }, [dispatch]);

  console.log(address);

  const _tableOptions = (row) => {
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

      &nbsp;
      <div className="row" style={{
        // margin: 20
      }}>

        <div className="col-1"></div>
        <div className="col-8">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Location Table
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <Loading isLoading={loading} />
                {

                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellSpacing="0"
                  >
                    <thead>
                      <tr className="text-table">
                        <th>Sl.</th>
                        <th>Location name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>#Of Employee</th>

                      </tr>
                    </thead>

                    <tbody>
                      {/* {
                          dataset.map((data,index)=>
                          <tr className="text-table" key={index} 
                          style={{
                            backgroundColor : data.active == Inactive.inactive && Inactive.background,
                            color : data.active == Inactive.inactive && Inactive.color
                          }}
                          >
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.count}</td>
                          <td>{data.active}</td>
                          <td onClick={()=>_tableOptions(data)} style={{cursor : 'pointer'}}>Edit</td>
                          </tr>
                          
                          )
                        } */}

                    </tbody>
                  </table>
                }
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
