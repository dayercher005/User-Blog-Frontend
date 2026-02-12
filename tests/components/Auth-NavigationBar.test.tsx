import { describe, it, expect } from "vitest";
import { render } from '@testing-library/react';
import { AuthenticatedNavigationBar } from "@/components/Auth-Navigation-bar";

describe("Authenticated Navigation Bar", () => {
    it("renders ToggleMode, Login and Signup button", () => {
        const { container } = render(<AuthenticatedNavigationBar />);
        expect(container).toMatchSnapshot();
    })
})