function getImageLocation(token: Token) {
  const newX = token.center.x - Math.min(token.w, token.h) / 2;
  const newY = token.center.y - Math.min(token.w, token.h) / 2;

  return { x: newX, y: newY };
}

function findTokenByIdPlaced(tokenId: string) {
  return (canvas as Canvas).tokens.placeables.find((t) => t.id == tokenId);
}

export async function movePan(tokenId: string): Promise<void> {
  const token = findTokenByIdPlaced(tokenId);

  return (canvas as Canvas).animatePan({
    x: token.center.x - token.w / 2,
    y: token.center.y - token.h / 2,
  });
}
