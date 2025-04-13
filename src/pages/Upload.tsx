import { useState } from "react";
import { Upload as UploadIcon, FileUp, File, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

type UploadedFile = {
  name: string;
  size: number;
  type: string;
  lastModified: number;
};

const UploadPage = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDetailSheetOpen, setIsDetailSheetOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified
      }));
      
      setFiles(prev => [...prev, ...newFiles]);
      // Reset the input value so the same file can be selected again
      e.target.value = '';
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please select at least one file to upload",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      setIsDetailSheetOpen(true);
    }, 1500);
  };

  const finalizeUpload = () => {
    if (!title) {
      toast({
        title: "Title required",
        description: "Please provide a title for your slides",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    // Simulate finalizing process
    setTimeout(() => {
      toast({
        title: "Upload Successful!",
        description: "Your slides have been uploaded and are being processed",
      });
      setIsUploading(false);
      setIsDetailSheetOpen(false);
      setFiles([]);
      setTitle("");
      setDescription("");
    }, 1500);
  };

  const getFileSize = (size: number) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  const getFileIcon = (type: string) => {
    if (type.includes('pdf')) return "PDF";
    if (type.includes('presentation') || type.includes('powerpoint')) return "PPT";
    if (type.includes('word')) return "DOC";
    return "FILE";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Upload Slides</h1>
          <p className="text-gray-600 mb-8">
            Upload your lecture slides, presentations, or study materials in various formats including
            PPT, PDF, and more. Our AI will analyze them to generate relevant quiz questions.
          </p>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center mb-6">
              <UploadIcon className="h-12 w-12 text-ape-purple mb-4" />
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Drag and drop your files here
              </h3>
              <p className="text-gray-500 text-center mb-4">
                or click to browse from your computer
              </p>
              <Label className="bg-ape-purple text-white hover:bg-ape-dark-purple px-4 py-2 rounded-md cursor-pointer transition-colors">
                <span>Browse Files</span>
                <Input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".pdf,.ppt,.pptx,.doc,.docx"
                  multiple
                />
              </Label>
              <p className="text-xs text-gray-500 mt-4">
                Supported formats: PDF, PPT, PPTX, DOC, DOCX (max 20MB per file)
              </p>
            </div>

            {files.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Selected Files</h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 rounded-md p-3 border border-gray-200"
                    >
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-ape-purple/10 rounded-md flex items-center justify-center mr-3">
                          <File className="h-5 w-5 text-ape-purple" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 truncate max-w-xs">{file.name}</p>
                          <p className="text-xs text-gray-500">
                            {getFileIcon(file.type)} • {getFileSize(file.size)}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={files.length === 0 || isUploading}
                className="bg-ape-purple hover:bg-ape-dark-purple"
              >
                {isUploading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Uploading...
                  </>
                ) : (
                  <>
                    <FileUp className="mr-2 h-4 w-4" />
                    Upload Slides
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Sheet open={isDetailSheetOpen} onOpenChange={setIsDetailSheetOpen}>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Slide Details</SheetTitle>
            <SheetDescription>
              Provide additional information about your slides to help generate better questions.
            </SheetDescription>
          </SheetHeader>
          <div className="py-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g. Introduction to Organic Chemistry"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Add a brief description of what these slides cover..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsDetailSheetOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="bg-ape-purple hover:bg-ape-dark-purple"
              onClick={finalizeUpload}
              disabled={isUploading}
            >
              {isUploading ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processing...
                </>
              ) : (
                "Complete Upload"
              )}
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default UploadPage;
