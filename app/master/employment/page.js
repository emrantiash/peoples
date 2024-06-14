"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import { getEmploymentTypeDetails } from "@/app/redux/slices/employementSlice";
import {
  saveDocument,
  getActionType,
} from "@/app/redux/slices/masterSlices";
import Table from "@/app/components/table/Table";
import Button from "@/app/components/button/Button";
import Loading from "@/app/components/loading/Loading";

const thead = [
  {
    id: 1,
    name: "Employment Type",
  },
  {
    id: 2,
    name: "No. of Employees",
  },
  
  {
    id: 3,
    name: "Status",
  }
 
];

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading,setLoading] = useState(true)
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    dispatch(setbreadcrumb(["Master", "Employment Type"]));
    dispatch(getEmploymentTypeDetails()).then(function (e) {
      e.payload && e.payload.success && ( 
        setDataset(makeTheData(e.payload.payload[0])),
        setLoading(false)
      )
    });
  }, [dispatch]);


  function makeTheData(data) {
    let arr = [];
    data.map((data, index) =>
      arr.push({
        id: data.id,
        name: data.name,
        count: data.totalCount,
        active : data.status == "Active" ? "Active" : "In-Active",
      })
    );
    return arr;
  }

  const _tableOptions = (row) => {
    dispatch(saveDocument(row));
    dispatch(getActionType("Edit"));
    router.push("/master/employment/add");
  };

  const _saveActionType = (_val) => {
    dispatch(saveDocument({}));
    dispatch(getActionType(_val));
  };

  return (
    <div>
      <div className="row">
        <div className="col-10"></div>
        <div
          className="col-2"
          style={{ color: "green", height: 30, cursor: "pointer" }}
        >
          <Link
            href="/master/employment/add"
            onClick={() => _saveActionType("Add")}
          >
            <Button class="btn btn-success text-table" text ="Add New" 
            icon = {<i className="fas fa-plus"></i>}
            />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-8">
           {/* <!-- DataTales Example --> */}
           {/* <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Employee Table 
                </h6>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  {

                    <table
                      className="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellSpacing="0"
                    >
                      <thead>
                        <tr>
                          <th>Sl.</th>
                          <th>Employment Type</th>
                          <th>#Employee</th>
                          <th>Status</th>
                        
                        </tr>
                      </thead>
                    
                      <tbody>
                        {
                          dataset.map((data,index)=>
                          <tr className="text-table" key={index} onClick={()=>_tableOptions(data)}>
                          <td>{index + 1}</td>
                          <td>{data.name}</td>
                          <td>{data.count}</td>
                          <td>{data.active}</td>
                          </tr>
                          
                          )
                        }
                        
                      </tbody>
                    </table>
                  }
                </div>
              </div>
            </div> */}
          <Table
            options
            thead={thead}
            tbody={dataset}
            makeOption={_tableOptions}
          />
        </div>
        <div className="col-2"></div>
      </div>
      <Loading isLoading={loading}/>
    </div>
  );
}
