import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, ScrollRestoration } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Loader2 } from "lucide-react";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDetails = lazy(() => import("@/pages/ProjectDetails"));
const Experience = lazy(() => import("@/pages/Experience"));
const About = lazy(() => import("@/pages/About"));
const Skills = lazy(() => import("@/pages/Skills"));
const Education = lazy(() => import("@/pages/Education"));
const Articles = lazy(() => import("@/pages/Articles"));
const ArticleDetails = lazy(() => import("@/pages/ArticleDetails"));
const Certifications = lazy(() => import("@/pages/Certifications"));
const Resume = lazy(() => import("@/pages/Resume"));
const Contact = lazy(() => import("@/pages/Contact"));

function SuspenseFallback() {
  return (
    <div className="flex h-[50vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}

function Layout() {
  return (
    <MainLayout>
      <ScrollRestoration />
      <Suspense fallback={<SuspenseFallback />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:slug", element: <ProjectDetails /> },
      { path: "experience", element: <Experience /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "education", element: <Education /> },
      { path: "articles", element: <Articles /> },
      { path: "articles/:slug", element: <ArticleDetails /> },
      { path: "certifications", element: <Certifications /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
