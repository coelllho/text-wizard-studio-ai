
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/podcast-generator" element={<PodcastGenerator />} />
          <Route path="/instagram-generator" element={<InstagramGenerator />} />
          <Route path="/blog-generator" element={<BlogGenerator />} />
          <Route path="/social-post-generator" element={<SocialPostGenerator />} />
          <Route path="/bullet-points-generator" element={<BulletPointsGenerator />} />
          <Route path="/discussion-post-generator" element={<DiscussionPostGenerator />} />
          <Route path="/resignation-letter-generator" element={<ResignationLetterGenerator />} />
          <Route path="/content-ideas-generator" element={<ContentIdeasGenerator />} />
          <Route path="/radio-ad-generator" element={<RadioAdGenerator />} />
          <Route path="/resume-objective-generator" element={<ResumeObjectiveGenerator />} />
          <Route path="/resume-headline-generator" element={<ResumeHeadlineGenerator />} />
          <Route path="/twitter-hashtag-generator" element={<TwitterHashtagGenerator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
