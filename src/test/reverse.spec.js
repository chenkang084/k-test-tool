import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-dom/test-utils";
import reverse from "./reverse";
// import expect from "expect.js";

import Notification from "rc-notification";

// describe("A suite of basic functions", function() {
//   it("reverse word", function() {
//     expect("DCBA").toEqual(reverse("ABCD"));
//   });
// });

describe("rc-notification", () => {
  it("works", done => {
    Notification.newInstance({}, notification => {
      notification.notice({
        content: <p className="test">1</p>,
        duration: 0.1
      });
      setTimeout(() => {
        const t = TestUtils.scryRenderedDOMComponentsWithClass(
          notification.component,
          "test"
        );
        expect(
          TestUtils.scryRenderedDOMComponentsWithClass(
            notification.component,
            "test"
          ).length
        ).toBe(1);
      }, 10);
      setTimeout(() => {
        expect(
          TestUtils.scryRenderedDOMComponentsWithClass(
            notification.component,
            "test"
          ).length
        ).toBe(0);
        notification.destroy();
        done();
      }, 1000);
    });
  });
});
