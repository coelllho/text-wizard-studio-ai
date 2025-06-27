import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import PodcastGenerator from "./pages/PodcastGenerator";
import InstagramGenerator from "./pages/InstagramGenerator";
import BlogGenerator from "./pages/BlogGenerator";
import SocialPostGenerator from "./pages/SocialPostGenerator";
import BulletPointsGenerator from "./pages/BulletPointsGenerator";
import DiscussionPostGenerator from "./pages/DiscussionPostGenerator";
import ResignationLetterGenerator from "./pages/ResignationLetterGenerator";
import ContentIdeasGenerator from "./pages/ContentIdeasGenerator";
import RadioAdGenerator from "./pages/RadioAdGenerator";
import ResumeObjectiveGenerator from "./pages/ResumeObjectiveGenerator";
import ResumeHeadlineGenerator from "./pages/ResumeHeadlineGenerator";
import TwitterHashtagGenerator from "./pages/TwitterHashtagGenerator";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="/podcast-generator" element={
              <ProtectedRoute>
                <PodcastGenerator />
              </ProtectedRoute>
            } />
            <Route path="/instagram-generator" element={
              <ProtectedRoute>
                <InstagramGenerator />
              </ProtectedRoute>
            } />
            <Route path="/blog-generator" element={
              <ProtectedRoute>
                <BlogGenerator />
              </ProtectedRoute>
            } />
            <Route path="/social-post-generator" element={
              <ProtectedRoute>
                <SocialPostGenerator />
              </ProtectedRoute>
            } />
            <Route path="/bullet-points-generator" element={
              <ProtectedRoute>
                <BulletPointsGenerator />
              </ProtectedRoute>
            } />
            <Route path="/discussion-post-generator" element={
              <ProtectedRoute>
                <DiscussionPostGenerator />
              </ProtectedRoute>
            } />
            <Route path="/resignation-letter-generator" element={
              <ProtectedRoute>
                <ResignationLetterGenerator />
              </ProtectedRoute>
            } />
            <Route path="/content-ideas-generator" element={
              <ProtectedRoute>
                <ContentIdeasGenerator />
              </ProtectedRoute>
            } />
            <Route path="/radio-ad-generator" element={
              <ProtectedRoute>
                <RadioAdGenerator />
              </ProtectedRoute>
            } />
            <Route path="/resume-objective-generator" element={
              <ProtectedRoute>
                <ResumeObjectiveGenerator />
              </ProtectedRoute>
            } />
            <Route path="/resume-headline-generator" element={
              <ProtectedRoute>
                <ResumeHeadlineGenerator />
              </ProtectedRoute>
            } />
            <Route path="/twitter-hashtag-generator" element={
              <ProtectedRoute>
                <TwitterHashtagGenerator />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
