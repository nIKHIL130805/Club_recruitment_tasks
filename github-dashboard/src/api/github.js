export async function fetchOrgRepos(org) {
  const response = await fetch(
    `https://api.github.com/orgs/${org}/repos?per_page=10`
  );

  if (response.status === 404) {
    throw new Error("Organization not found");
  }

  if (response.status === 403) {
    throw new Error("API rate limit exceeded");
  }

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();
  return data;
}
