import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { UnauthenticatedNavigationBar } from "@/components/Unauth-Navigation-bar";

describe("Unauthenticated Navigation Bar", () => {
    it("renders ToggleMode, Login and Signup button", () => {
        const { container } = render(<UnauthenticatedNavigationBar />);
        expect(container).toMatchSnapshot();
    })
})