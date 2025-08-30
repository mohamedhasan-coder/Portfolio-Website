import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: string;
}

const techStack: Skill[] = [
  { name: 'React.js', icon: '⚛️' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML', icon: '🟧' },
  { name: 'Java', icon: '☕' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Python', icon: '🐍' },
  { name: 'C++', icon: '⚡' }
];

const tools: Skill[] = [
  { name: 'VS Code', icon: '💻' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'Figma', icon: '🎨' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* TechStack Section */}
            <div className="animate-on-scroll">
              <h2 className="text-3xl font-bold text-primary mb-8">TechStack</h2>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech) => (
                  <Card key={tech.name} className="skill-card card-hover" data-testid={`skill-${tech.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{tech.icon}</div>
                      <h3 className="text-sm font-medium text-foreground">{tech.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* About & Tools Section */}
            <div className="animate-on-scroll">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">About</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Full Stack Developer skilled in Java, Spring Boot, React.js, and modern web technologies, 
                  with a strong passion for AI & Data Science.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Tools</h3>
                <div className="grid grid-cols-5 gap-4">
                  {tools.map((tool) => (
                    <Card key={tool.name} className="skill-card card-hover" data-testid={`tool-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      <CardContent className="p-4 text-center">
                        <div className="text-3xl mb-2">{tool.icon}</div>
                        <h4 className="text-xs font-medium text-foreground">{tool.name}</h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
