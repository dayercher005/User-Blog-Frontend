import { vi, describe, it, expect } from 'vitest'
import { BlogCards } from '@/components/BlogCards.tsx';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("@/components/BlogCards.tsx", { spy: true });



