"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  createEmploymentType,
  updateEmploymentType,
} from "@/app/redux/slices/employementSlice";
import { setbreadcrumb } from "@/app/redux/slices/breadcrumbSlice";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/button/Button";
import Select from "@/app/components/select/Select";
import Label from "@/app/components/label/Label";

const href = "/employment";

const data = [
  {
    id: true,
    name: "Active",
  },
  {
    id: false,
    name: "InActive",
  },
];

export default function Page() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [val, setVal] = useState("");
  const [isActive, setIsActive] = useState(true);
  const action = useSelector((state) => state.masterReducer.action);
  const employment = useSelector(
    (state) => state.masterReducer.document
  );

  const GrandChild = action == "Add" ? "Add New" : "Edit "

  const changeUserFieldHandler = (e) => {
    setVal(e.target.value);
  };

  useEffect(()=>{
    dispatch(setbreadcrumb(["Master","Employment Type" , GrandChild]))
  },[dispatch])

  useEffect(() => {
    Object.keys(employment).length > 0 && setVal(employment.name);
  }, [ Object.keys(employment).length > 0]);

  const _getStatus = (e) => {
    setIsActive(e.target.value);
  };

  const _submit = () => {
    if (action == "Add" && val != "") {
      let options = {
        attributeName: val,
      };
      dispatch(createEmploymentType(options)).then(function (e) {
        e.payload.success && router.push(href);
      });
    }
    if (action == "Edit" && val != "") {
      let options = {
        attributeId: employment.id,
        newName: val,
        isActive: isActive,
      };
      dispatch(updateEmploymentType(options)).then(function (e) {
      e.payload &&   e.payload.success && router.push(href);
      });
    }
  };

  const _cancel = () =>{
    router.push("/master/employment")
  }
  return (
    <div className="row">
      <div className="col-1"></div>
      <div className="col-2">
        <div>
          <Label title="Employee Type" />
          <Input
            placeholder=""
            value={val}
            onChange={(e) => changeUserFieldHandler(e)}
          />
        </div>
        <div>
          {action != "Add" && (
            <Select
              data={data}
              style={{ marginBottom: 10 }}
              onchange={_getStatus}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Button
            class="btn btn-success"
            text={action == "Add" ? "Submit" : "Update" } 
            // width={150}
            onclick={_submit}
          />
          &nbsp;
          <Button class="btn btn-outline-info" text="Cancel " onclick={_cancel} />
        </div>
      </div>
    </div>
  );
}
