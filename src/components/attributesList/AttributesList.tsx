import React, { ReactElement } from "react";
import "./attributesList.css";
import "../../commonCSS/component_center-align.css"
import { HorizontalSingleStat } from "../horizontalSingleStat/HorizontalSingleStat";
import classNames from "classnames";

type Props = {
  title: string
  attributes: string[]
}

export function AttributesList(props: Props): ReactElement {
    const attributesList = props.attributes.map((value, index) => (
        <li key={index} >
            <HorizontalSingleStat statDescription={value} />
        </li>
    ));
    return (
        <div className={classNames("attributes-list_solid-border", "attributes-list_margin")}>
            <ul className="attributes-list_none-marker">
                {attributesList}
            </ul>
            <div className="component_center-align">
                {props.title}
            </div>
        </div>
    );
}
