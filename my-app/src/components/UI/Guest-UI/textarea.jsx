export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none ${className}`}
      {...props}
    />
  );
}
