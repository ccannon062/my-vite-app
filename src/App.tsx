//Credit to Shadcn for the components

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  return (
    <>
      <div className="relative bg-[url('/bg-image.jpg')] w-lvw h-lvh bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-8 py-8">
          <div className="flex items-stretch gap-4">
            <Card className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg">
              <CardContent>
                <img
                  src="./public/headshot.jpg"
                  alt="Headshot photo"
                  className="rounded-sm"
                />
              </CardContent>
            </Card>
            <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white shadow-lg">
              <CardHeader>
                <CardTitle>About Me</CardTitle>
                <CardDescription className="text-gray-300">
                  Student & Software Developer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I'm a senior Computer Science major at Creighton University,
                  minoring in Philosophy. I'm passionate about desigining and
                  building beautiful, simple software. My experience as an
                  intern at First National Bank of Omaha and as a web developer
                  for my schools "iJay practicum," are just a few of the many
                  different fields where I've applied my skills. To see more of
                  my work please visit my portfolio page linked below.
                </p>
              </CardContent>
              <CardFooter>
                <a href="https://ccannon.dev" className="text-gray-300">
                  ccannon.dev
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
