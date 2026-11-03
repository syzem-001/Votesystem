export const hasVoted = (arr,userName) => arr.some(obj => obj.votes.includes(userName))

export const getMaxVote = (arr) => Math.max(0,...arr.map(obj => obj.votes.length))
