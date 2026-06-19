export function HashTags() {
  const tags = ["血糖管理", "小米粥", "枸杞大枣", "养生食谱"]
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 px-4 py-3">
      {tags.map((tag) => (
        <span key={tag} className="text-sm font-medium text-primary">
          #{tag}
        </span>
      ))}
    </div>
  )
}
